import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
copyright={
  <div className="footer__copyright" style={{lineHeight: '1.8', fontSize: '0.85em'}}>
    除非另有声明，<a
      href="https://caellab.org/"
      target="_blank"
      rel="noopener"
      style={{color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '2px'}}
    >虚舟实验室团队</a>和<a
      href="https://www.caellab.com/"
      target="_blank"
      rel="noopener"
      style={{color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '2px'}}
    >虚舟实验室</a>授予世界上任何人在 CaelLabPolicy 中的所有文本以 <a
      href="https://130.wiki/wiki/Project:CC_0"
      target="_blank"
      rel="noopener"
      style={{color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '2px'}}
    >CC0</a> 分发。法律文本不应限制传播，因此你可以随意的存档该页面、永久地保留这些信息，还可以被任何人用于学习、研究、更改后使用。虚舟实验室参与「自由知识运动」，这是一项全球性社会与文化运动，旨在促进人类知识的自由获取、使用、修改和分享；反对过度限制的版权法律，倡导开放获取与知识共享。
  </div>
}
    />
  );
}
export default React.memo(Footer);
