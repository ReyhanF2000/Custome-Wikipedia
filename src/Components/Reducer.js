export function reducer(state, action) {
  return (HANDLERS[action.type] ||
    (() => state))(state, action.payload)
}
export const ACTIONS = {
  LOADING: 'LOADING',
  KEYWORD_CHANGE: 'KEYWORD_CHANGE',
  RECEIVED_DATA: 'RECEIVED_DATA',
  NOTRECEIVED_DATA: 'NOTRECEIVED_DATA',
}
const HANDLERS = {
  [ACTIONS.LOADING]: handleLoading,
  [ACTIONS.KEYWORD_CHANGE]: handleKeywordChange,
  [ACTIONS.RECEIVED_DATA]: handleReceivedData,
  [ACTIONS.NOTRECEIVED_DATA]: handleNotReceivedData,
}
function handleKeywordChange(state, payload) {
  return {
    ...state,
    keyword: payload
  }
}
function handleReceivedData(state, payload) {
  return {
    ...state,
    data: payload,
    loading: false
  };
}
function handleNotReceivedData(state, payload) {
  return {
    ...state,
    data: '',
    loading: true
  };
}
function handleLoading(state, payload) {
  return {
    ...state,
    loading: true
  }
}
