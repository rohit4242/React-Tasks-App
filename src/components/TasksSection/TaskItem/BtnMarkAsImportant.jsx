import React from "react"
import { useAppDispatch } from "../../../store/hooks"
import { tasksActions } from "../../../store/Tasks.store"
import { ReactComponent as StarLine } from "../../../assets/star-line.svg"

const BtnMarkAsImportant = ({ taskId, taskImportant }) => {
  const dispatch = useAppDispatch()

  const markAsImportantHandler = () => {
    dispatch(tasksActions.markAsImportant(taskId))
  }

  return (
    <button
      title={taskImportant ? "unmark as important" : "mark as important"}
      onClick={markAsImportantHandler}
      className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"
    >
      <StarLine
        className={`w-5 h-5 sm:w-6 sm:h-6 ${
          taskImportant ? "fill-emerald-300 stroke-emerald-300 " : "fill-none"
        }`}
      />
    </button>
  )
}

export default React.memo(BtnMarkAsImportant)
