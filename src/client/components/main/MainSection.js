import React from 'react'
import style from '../../style/style.styl'

const MainSection = ({children}) => (
	<main className={style.main}>
		{children}
	</main>
)