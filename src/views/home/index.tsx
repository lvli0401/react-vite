import welcome from '@/assets/images/welcome.png'
import s from './index.module.less'

const Home = () => {
	return (
		<div className={s.home}>
			<img src={welcome} alt="welcome" />
		</div>
	)
}

export default Home
