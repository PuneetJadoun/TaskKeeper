import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, employee}) => {

    const [userData, setUserData] = useContext(AuthContext)

    const handleAccept = () => {
        const updatedData = userData.map((emp) => {
            if (emp.firstName === employee.firstName) {
                return {
                    ...emp,
                    tasks: emp.tasks.map((t) => {
                        if (t.taskTitle === data.taskTitle) {
                            return { ...t, active: true, newTask: false }
                        }
                        return t
                    }),
                    taskCounts: {
                        ...emp.taskCounts,
                        active: emp.taskCounts.active + 1,
                        newTask: emp.taskCounts.newTask - 1
                    }
                }
            }
            return emp
        })
        setUserData(updatedData)
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={handleAccept} className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask