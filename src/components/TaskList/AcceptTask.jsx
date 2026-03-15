import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, employee}) => {

    const [userData, setUserData] = useContext(AuthContext)

    const handleComplete = () => {
        const updatedData = userData.map((emp) => {
            if (emp.firstName === employee.firstName) {
                return {
                    ...emp,
                    tasks: emp.tasks.map((t) => {
                        if (t.taskTitle === data.taskTitle) {
                            return { ...t, active: false, completed: true }
                        }
                        return t
                    }),
                    taskCounts: {
                        ...emp.taskCounts,
                        active: emp.taskCounts.active - 1,
                        completed: emp.taskCounts.completed + 1
                    }
                }
            }
            return emp
        })
        setUserData(updatedData)
    }

    const handleFailed = () => {
        const updatedData = userData.map((emp) => {
            if (emp.firstName === employee.firstName) {
                return {
                    ...emp,
                    tasks: emp.tasks.map((t) => {
                        if (t.taskTitle === data.taskTitle) {
                            return { ...t, active: false, failed: true }
                        }
                        return t
                    }),
                    taskCounts: {
                        ...emp.taskCounts,
                        active: emp.taskCounts.active - 1,
                        failed: emp.taskCounts.failed + 1
                    }
                }
            }
            return emp
        })
        setUserData(updatedData)
    }
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick={handleComplete} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button onClick={handleFailed} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask