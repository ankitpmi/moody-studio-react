import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';


type State = {
  isLoggedIn: boolean
};

type Actions = {  
  setIsLoggedIn:(val: boolean) => void
};

export const useUserStore = create(
  devtools(
    persist<State & Actions>(
      set => ({
        isLoggedIn: false,
        setIsLoggedIn(login) {
          set(state => ({
            ...state,
            isLoggedIn: login
          }))
        },
      }),
      {
        name: 'user_storage',
        storage: createJSONStorage(() => localStorage),
      }
    )

  )
)