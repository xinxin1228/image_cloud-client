import React, { memo } from 'react'
import { Tooltip } from 'antd'
import { FooterStyle } from './style'

const Footer: React.FC = memo(() => {
  return (
    <FooterStyle>
      <div className="footer-left">
        <Tooltip title="图像云盘" placement="right">
          <i className="iconfont icon-zhujiwangpan"></i>
        </Tooltip>
      </div>
      <div className="footer-right">
        <div className="avatar"></div>
      </div>
    </FooterStyle>
  )
})

export default Footer
