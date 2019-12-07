export function creatControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        value: '',
        touched: false
    }
}