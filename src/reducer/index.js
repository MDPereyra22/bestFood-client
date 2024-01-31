import { GET_RECIPES, RECIPES_BY_DIET, SORT_RECIPES, SORT_BY_HEALTH_SCORE, FILTER_CREATED, GET_NAME_RECIPES, POST_RECIPES, GET_DIETS, GET_DETAIL } from "../actions";

const initialState = {
    recipes: [],
    allRecipes: [],
    copyAllRecipes:[],
    diets: [],
    detail:[],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
            case RECIPES_BY_DIET:
                let copiFilter;
                
                if (state.copyAllRecipes.length > 0) {
                    copiFilter = state.copyAllRecipes;
                } else {
                    copiFilter = state.allRecipes;
                }
                
                const recipesFiltered = action.payload === "all" ? copiFilter : copiFilter.filter(el => el.diets && el.diets.includes(action.payload));
                
                return {
                    ...state,
                    recipes: recipesFiltered
                }
        case SORT_RECIPES:
            const sortedRecipes = [...state.recipes].sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (action.payload === "ascendente") {
                    return titleA.localeCompare(titleB);
                } else {
                    return titleB.localeCompare(titleA);
                }
            });
            return {
                ...state,
                recipes: sortedRecipes,
            };


        case SORT_BY_HEALTH_SCORE:
            const sortedRecipesByHealthScore = [...state.recipes];
            sortedRecipesByHealthScore.sort((a, b) => {
                if (action.payload === 'ascendente') {
                    return a.healthScore - b.healthScore;
                } else {
                    return b.healthScore - a.healthScore;
                }
            });
            return {
                ...state,
                recipes: sortedRecipesByHealthScore,
            };
        case FILTER_CREATED:
            const allRecipes1 = state.allRecipes
            const createdFilter = action.payload === "created" ? allRecipes1.filter(el => el.createdInDb) : allRecipes1.filter(el => !el.createdInDb);
            return {
                ...state,
                recipes: action.payload === "all" ? state.allRecipes : createdFilter,
                copyAllRecipes: action.payload === "all" ? state.allRecipes : createdFilter,
            }

        case GET_NAME_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }

        case POST_RECIPES:
            return {
                ...state,
            }
        
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
            }    
        default:
            return { ...state }

    }
}

export default rootReducer;