import MakeTestPaper from "@/views/test/MakeTestPaper";
import TestPaperManage from "@/views/test/TestPaperManage";
import TestResult from "@/views/test/TestResult";
import TestSetter from "@/views/test/TestSetter";
import ViewTestPaper from "@/views/test/ViewTestPaper";

export default[
        {
            path:'MakeTestPaper',
            components:{
                show:MakeTestPaper
            }
        },
        {
            path:'TestPaperManage',
            components:{
                show:TestPaperManage
            }
        },
        {
            path:'TestResult',
            components:{
                show:TestResult
            }
        },
        {
            path:'TestSetter',
            components:{
                show:TestSetter
            }
        },
        {
            path:'ViewTestPaper',
            components:{
                show:ViewTestPaper
            }
        }
]