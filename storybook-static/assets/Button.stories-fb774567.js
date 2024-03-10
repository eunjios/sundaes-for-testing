import{j as x,c as S,a}from"./emotion-react.browser.esm-a1ba09a2.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c8577175.js";function c({children:e,...r}){return x("button",{css:S`
        min-width: 256px;
        height: 58px;
        font-size: 28px;
        padding: 8px 24px;
        background: black;
        color: white;
        border: 1px solid black;
        cursor: ${r.disabled?"not-allowed":"pointer"};

        &:hover {
          background: #333;
          border: 1px solid #333;
        }
      `,...r,children:e})}try{c.displayName="PrimaryButton",c.__docgenInfo={description:"",displayName:"PrimaryButton",props:{}}}catch{}function m({children:e,...r}){return x("button",{css:S`
        font-size: 16px;
        background: transparent;
        color: #aaa;
        border: none;
      `,...r,children:e})}try{m.displayName="SecondaryButton",m.__docgenInfo={description:"",displayName:"SecondaryButton",props:{}}}catch{}function t({theme:e,children:r,...d}){switch(e){case"primary":return a.jsx(c,{...d,children:r});case"secondary":return a.jsx(m,{...d,children:r})}}try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const j={title:"UI/Button",component:t,tags:["autodocs"],argTypes:{theme:{description:"버튼의 테마를 지정합니다."}},parameters:{docs:{description:{component:"다양한 크기의 버튼 컴포넌트 입니다."}}}},o={name:"Primary",args:{theme:"primary"},render:e=>a.jsx(t,{theme:e.theme,children:"Order"})},n={name:"Primary (Long Text)",args:{theme:"primary"},render:e=>a.jsx(t,{theme:e.theme,children:"Let's Create New Order Now"})},s={name:"Secondary",args:{theme:"secondary"},render:e=>a.jsx(t,{theme:e.theme,children:"Back"})};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    theme: 'primary'
  },
  render: arg => <Button theme={arg.theme}>Order</Button>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Primary (Long Text)',
  args: {
    theme: 'primary'
  },
  render: arg => <Button theme={arg.theme}>{\`Let's Create New Order Now\`}</Button>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var l,_,B;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Secondary',
  args: {
    theme: 'secondary'
  },
  render: arg => <Button theme={arg.theme}>Back</Button>
}`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const w=["PrimaryButtonStory","PrimaryLongButtonStory","SecondaryButtonStory"];export{o as PrimaryButtonStory,n as PrimaryLongButtonStory,s as SecondaryButtonStory,w as __namedExportsOrder,j as default};
