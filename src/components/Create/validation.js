const validation = (form) => {
    let errors = {};

    if (!form.title) {
        errors.title = "Se requiere un título";
    }
    if (!form.title || /\d/.test(form.title)) {
        errors.title = "El nombre no puede contener números";
    }

    if (!form.summary) {
        errors.summary = "Se requiere una descripción";
    }

    if (!form.healthScore || form.healthScore < 0 || form.healthScore > 100) {
        errors.healthScore = "El health score debe estar entre 0 y 100";
    }

    return errors;
};

export default validation;