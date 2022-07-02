import React, { FC } from 'react';

type Vowels = {a:'a', e:'e', i: 'i', o:'o', u:'u'}
type VawelInOhansObject = Pick<Vowels, 'a'| 'o'>
type VawelNotInOhansObject = Omit<Vowels, 'a'| 'o'>

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>

export const Text = <C extends React.ElementType = "span"> ({as, children, ...restProps}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>
}


interface Props {
	as: React.ElementType;
	children: React.ReactNode;
}


export const Tex: FC<Props> = ({as, children}) => {
  const Component = as || "span";
  return <Component>{children}</Component>
}