import styled, { css } from 'styled-components';

export const FormFieldWrapper = styled.div`
position: relative;
textarea {
  min-height: 150px;
}
input[type="color"] {
  padding-left: 56px;
}
`;

export const Label = styled.label``;

Label.Text = styled.span`
color: #E5E5E5;
height: 57px;
position: absolute;
top: 0;
left: 16px;

display: flex;
align-items: center;

transform-origin: 0% 0%;
font-size: 16px;
font-style: normal;
font-weight: 300;

transition: .1s ease-in-out;
`;

export const Input = styled.input`
background: #222;
color: #fff;
display: block;
width: 100%;
height: 57px;
font-size: 16px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-bottom: 4px solid #232323;

padding: 16px 16px;
margin-bottom: 45px;

resize: none;
border-radius: 4px;
transition: border-color .3s;

&:focus {
  border-bottom-color: var(--primary);
}
&:focus:not([type='color']) + ${Label.Text} {
  transform: scale(.6) translateY(-10px);
}
${({ hasValue }) => hasValue && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
      }
    `
}
`;
