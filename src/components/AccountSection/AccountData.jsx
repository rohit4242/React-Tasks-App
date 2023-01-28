import React from "react"
import avatar1 from "../../assets/avatar-1.jpg"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { menusActions } from "../../store/Menu.store"
import LayoutMenus from "../Utilities/LayoutMenus"
import DarkMode from "./DarkMode"
import DeleteTasks from "./DeleteTasks"
import TasksDone from "./TasksDone"

const AccountData = () => {
  const menuOpen = useAppSelector(state => state.menu.menuAccountOpened)

  const dispatch = useAppDispatch()

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount())
  }

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
          <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4" />
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          href="https://github.com/rohit4242"
          className="mt-4 bg-[#00B3B2] p-2 rounded-md text-center transition hover:bg-[#009F9F] text-slate-200"
        >
          Made by Rohit Luni
        </a>
      </section>
    </LayoutMenus>
  )
}

export default AccountData
