let code = {}

code.base=`<p>{{checked}}</p>
<Radio v-model="checked" @change="change">ζ΅θ―</Radio>
<Button @click="checked=!checked">Click me</Button>`

code.disabled = `<Radio label="θ‘θπ" disabled :value="true"></Radio>
<Radio label="ζ’¨ε­π" disabled></Radio>`
code.group = `<p>ε½ειδΈ­εΌοΌ{{data}}</p>
<RadioGroup v-model="data" @change="change">
  <Radio label="0">θΉζπ</Radio>
  <Radio label="1">ζ©ε­π</Radio>
  <Radio label="2">ι¦θπ</Radio>
  <Radio label="3">ζ ε­π°</Radio>
  <Radio label="4">θ‘θπ</Radio>
  <Radio label="5" disabled>ζ’¨ε­π</Radio>
</RadioGroup>
<Button @click="data=''">ζΈι€</Button>
<Button @click="data='0'">ιδΈ­θΉζ</Button>
data() {
  return {
    checked:true,
    data: "0",
  };
},
methods: {
  change(v) {
    console.log(v);
  }
}`
code.groupbutton =`<RadioGroup value="θΉζ">
  <RadioButton label="θΉζ"></RadioButton>
  <RadioButton label="ζ©ε­"></RadioButton>
  <RadioButton label="ι¦θ"></RadioButton>
  <RadioButton label="ζ’¨ε­"></RadioButton>
</RadioGroup>
<br/>
<br/>
<RadioGroup value="θΉζ"  mini>
  <RadioButton label="θΉζ"></RadioButton>
  <RadioButton label="ζ©ε­"></RadioButton>
  <RadioButton label="ι¦θ"></RadioButton>
  <RadioButton label="ζ’¨ε­" disabled></RadioButton>
</RadioGroup>
<br/>
<br/>
<RadioGroup value="θΉζ"  disabled mini>
  <RadioButton label="θΉζ"></RadioButton>
  <RadioButton label="ζ©ε­"></RadioButton>
  <RadioButton label="ι¦θ"></RadioButton>
  <RadioButton label="ζ’¨ε­" disabled></RadioButton>
</RadioGroup>`
export default code