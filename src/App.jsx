import React from "react"
import AccountData from "./components/AccountSection/AccountData"
import Footer from "./components/Footer"
import Menu from "./components/Menu/Menu"
import TasksSection from "./components/TasksSection/TasksSection"
import ModalCreateTask from "./components/Utilities/ModalTask"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { modalActions } from "./store/Modal.store"
import { tasksActions } from "./store/Tasks.store"

const App = () => {
  const modal = useAppSelector(state => state.modal)

  const dispatch = useAppDispatch()

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask())
  }

  const createNewTaskHandler = task => {
    dispatch(tasksActions.addNewTask(task))
  }

  return (
    <div className="bg-[#c4d1e1] min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-lg sm:text-base text-base">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <TasksSection />
      <Footer />
      <AccountData />
    </div>
  )
}

export default App
