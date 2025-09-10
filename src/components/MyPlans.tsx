import Title from 'antd/es/typography/Title'
import PlanTable from './PlanTable'
import '../styles/MyPlans.css'
import { ConfigProvider } from 'antd'

const MyPlans = () => {
  return (
    <div className='plans-container'>
        <ConfigProvider
        theme={{
            components: {
                Typography: {
                    colorText: "white",
                    fontSize: 18,
                    colorTextHeading: "white",
                },
                Table: {
                    borderColor: "transparent",
                    colorBgContainer: "transparent",
                    rowHoverBg: "rgb(64,64,64)",
                },
                Checkbox:{
                    colorBgContainerDisabled: "transparent",
                    colorTextDisabled: "lime"
                }
            }
        }}>
            <Title className="plans-title" level={4}>Things I'm up to</Title>
            <div className='table-container'>
                <PlanTable />
            </div>
        </ConfigProvider>
    </div>
  )
}

export default MyPlans