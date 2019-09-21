import ClassManage from "@/views/base/ClassManage";
import ModifyPassword from "@/views/base/ModifyPassword";
import StudentManage from "@/views/base/StudentManage";
import TeacherManage from "@/views/base/TeacherManage";
export default[
        {
            path:'/ClassManage',
            components:{
                show:ClassManage
            }
        },
        {
            path:'/ModifyPassword',
            components:{
                show:ModifyPassword
            }
        },
        {
            path:'/StudentManage',
            components:{
                show:StudentManage
            }
        },
        {
            path:'/TeacherManage',
            components:{
                show:TeacherManage
            }
        }
]