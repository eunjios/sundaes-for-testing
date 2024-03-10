import{j as n,c as o,a as r}from"./emotion-react.browser.esm-a1ba09a2.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c8577175.js";function d({children:e,...t}){return n("label",{css:o`
        font-size: 16px;
        font-weight: 600;
      `,...t,children:e})}try{d.displayName="Label1",d.__docgenInfo={description:"",displayName:"Label1",props:{}}}catch{}function x({children:e,...t}){return n("label",{css:o`
        font-size: 12px;
        font-weight: 600;
      `,...t,children:e})}try{x.displayName="Label2",x.__docgenInfo={description:"",displayName:"Label2",props:{}}}catch{}function g({children:e,...t}){return n("p",{css:o`
        font-size: 28px;
        & strong {
          margin: 0 16px;
          border-bottom: 2px solid black;
        }
      `,...t,children:e})}try{g.displayName="Text1",g.__docgenInfo={description:"",displayName:"Text1",props:{}}}catch{}function u({children:e,...t}){return n("p",{css:o`
        font-size: 20px;
        & strong {
          margin: 0 16px;
        }
      `,...t,children:e})}try{u.displayName="Text2",u.__docgenInfo={description:"",displayName:"Text2",props:{}}}catch{}function h({children:e}){return n("p",{css:o`
        font-size: 32px;
        font-weight: 500;
        margin: 0 0 4px;
      `,children:e})}try{h.displayName="Title1",h.__docgenInfo={description:"",displayName:"Title1",props:{}}}catch{}function a({theme:e,children:t,...s}){switch(e){case"title1":return r.jsx(h,{...s,children:t});case"text1":return r.jsx(g,{...s,children:t});case"text2":return r.jsx(u,{...s,children:t});case"label1":return r.jsx(d,{...s,children:t});case"label2":return r.jsx(x,{...s,children:t});default:return r.jsx("p",{...s,children:t})}}try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"title1"'},{value:'"text1"'},{value:'"text2"'},{value:'"label1"'},{value:'"label2"'}]}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/Text",component:a,tags:["autodocs"],argTypes:{theme:{description:"텍스트의 테마를 지정합니다."},htmlFor:{table:{disable:!0}}},parameters:{docs:{description:{component:"다양한 폰트 사이즈와 굵기로 일관된 텍스트를 만들 수 있는 컴포넌트 입니다."}}}},c={name:"Title 1",render:e=>r.jsx(a,{theme:e.theme,children:"Toppings"}),args:{theme:"title1"}},l={name:"Text 1",args:{theme:"text1"},render:e=>r.jsxs(a,{theme:e.theme,children:["Grand Total ",r.jsx("strong",{children:"$10.00"})]})},m={name:"Text 2",args:{theme:"text2"},render:e=>r.jsxs(a,{theme:e.theme,children:["Toppings Total ",r.jsx("strong",{children:"$3.00"})]})},i={name:"Label 1",args:{theme:"label1"},render:e=>r.jsx(a,{theme:e.theme,children:"Chocolate covered pretzels"})},p={name:"Label 2",args:{theme:"label2"},render:e=>r.jsx(a,{theme:e.theme,children:"Chocolate covered pretzels"})};var _,T,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Title 1',
  render: arg => <Text theme={arg.theme}>Toppings</Text>,
  args: {
    theme: 'title1'
  }
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var b,f,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Text 1',
  args: {
    theme: 'text1'
  },
  render: arg => <Text theme={arg.theme}>
      Grand Total <strong>$10.00</strong>
    </Text>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,L,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Text 2',
  args: {
    theme: 'text2'
  },
  render: arg => <Text theme={arg.theme}>
      Toppings Total <strong>$3.00</strong>
    </Text>
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var v,z,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Label 1',
  args: {
    theme: 'label1'
  },
  render: arg => <Text theme={arg.theme}>Chocolate covered pretzels</Text>
}`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var w,C,$;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Label 2',
  args: {
    theme: 'label2'
  },
  render: arg => <Text theme={arg.theme}>Chocolate covered pretzels</Text>
}`,...($=(C=p.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const k=["Title1Story","Text1Story","Text2Story","Label1Story","Label2Story"];export{i as Label1Story,p as Label2Story,l as Text1Story,m as Text2Story,c as Title1Story,k as __namedExportsOrder,V as default};
