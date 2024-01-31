import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const RECIPES_BY_DIET = "RECIPES_BY_DIET";
export const SORT_RECIPES = "SORT_RECIPES";
export const SORT_BY_HEALTH_SCORE = "SORT_BY_HEALTH_SCORE";
export const FILTER_CREATED = "FILTER_CREATED";
export const GET_NAME_RECIPES = "GET_ NAME_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPES ="POST_RECIPES";
export const GET_DETAIL = "GET_DETAIL"

export const getRecipes = () => {
    const endpoint = 'http://localhost:3001/recipes';
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        try {
            return dispatch({
                type: GET_RECIPES,
                payload: data
            })

        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const filteredRecipesByDiets = (payload) => {
    return {
        type: RECIPES_BY_DIET,
        payload: payload
    }
};

export const sortRecipes = (payload) => {
    return {
        type: SORT_RECIPES,
        payload: payload
    };
}

export const sortHealthScore = (payload) => {
    return {
        type: SORT_BY_HEALTH_SCORE,
        payload: payload
    };
};

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload: payload
    }
}

export const getNameRecipes = (payload) => {
    const endpoint = 'http://localhost:3001/recipes?name=';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint + payload)
            return dispatch({
                type: GET_NAME_RECIPES,
                payload: data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get("http://localhost:3001/diets",{});   
            return dispatch({
                type: GET_DIETS,
                payload: data,
            })
        } catch (error) {
            console.error(error)
        }
    }
};

export const postRecipe = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/recipes", payload)
            alert("Recipe created")
            return response
        } catch (error) {
           alert(error.response.data)
        }
    }
};

export const getDetail =(id)=>{
    const endpoint = `http://localhost:3001/recipes/${id}`
    return async(dispatch)=>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        } catch (error) {
            console.error(error)   
        }
    }
}