import { Button } from 'antd'
import { getAuthorButtons } from '@/api/modules/login'

const DataScreen = () => {
	const requestMenuList = async () => {
		const res = await getAuthorButtons()
		console.log(res)
	}
	return (
		<div className="content-box">
			<span className="text">DataScreen đđđđ</span>
			<Button type="primary" onClick={requestMenuList}>
				çšćĺčľˇç˝çťčŻˇćą đ
			</Button>
		</div>
	)
}

export default DataScreen
