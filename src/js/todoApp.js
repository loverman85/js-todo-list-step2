import { user } from './user.js'

const todoApp = () => {
  const init = () => {
    user().addUser();
  }
  return {init}
}

export {todoApp};
