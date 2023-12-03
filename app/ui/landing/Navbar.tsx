'use client'
import React from 'react'
import { TeamOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const navbar = () => {
	return (
		<div className="flex items-center justify-around h-16 w-full">
			<div className="w-1/5 h-auto flex gap-4 items-center justify-center ">
				<TeamOutlined />
				<p className="text-2xl font-light">Teapp</p>
			</div>
			<div className="flex items-center justify-around w-2/5 h-auto">
				<Button type="link">Github</Button>
				<Button type="link">{`Original Cube's`}</Button>
				<Button type="link">Steam</Button>
			</div>
			<div className="w-1/5 h-auto flex gap-4 items-center justify-center ">
				<LinkedinOutlined />
				<p className="text-md font-light">Contact Me</p>
			</div>
		</div>
	)
}

export default navbar
