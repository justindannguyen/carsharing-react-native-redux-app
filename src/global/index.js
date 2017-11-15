import { Toast } from 'native-base'

function showToast(configs = {}) {
  configs.duration = 3
  configs.buttonText = 'Got it!'
  Toast.show(configs)
}

/**
 * Show a success toast from given message.
 * 
 * @param {string} message 
 */
export function showSuccess(message) {
  showToast({ type: 'success' })
}

/**
 * Show a warning toast from given message.
 * 
 * @param {string} message 
 */
export function showWarning(message) {
  showToast({ type: 'warning', text : message })
}

/**
 * Show a danger toast from given message.
 * 
 * @param {string} message 
 */
export function showError(message) {
  showToast({ type: 'danger' })
}