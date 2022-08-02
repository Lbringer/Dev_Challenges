import './App.css';
import React from 'react';
import Button from './button'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<>
      <div className='con'>
        <Button variant="default" label={"<Button />"} />
        <Button variant="focused" label={"&:hover, &:focus"} />
        <Button variant="outline" label={"<Button variant=”outline” />"} />
        <Button variant="outline-focused" label={"<Button variant=”outline” />"} />
      </div>
      <div className='con'>
        <Button variant="text" label={"<Button variant=”text” />"} />
        <Button variant="text-focused" label={"&:hover, &:focus"} />
        <Button variant="disable" label={"<Button disableShadow />"} />
        <Button disabled content="disabled" label={"<Button disabled />"} />
      </div>
      <div className='con'>
        <Button variant="text" disabled content="disabled" label={"<Button variant=”text” disabled />"} />
        <Button variant="default" startIcon="local_grocery_store" label={"<Button startIcon=”local_grocery_store” />"} />
        <Button variant="default" endIcon="local_grocery_store" label={"<Button endIcon=”local_grocery_store” />"} />
        <Button variant="default" size="sm" label={"<Button size=”sm” />"} />
      </div>
      <div className='con'>
        <Button variant="default" size="md" label={"<Button size=”md” />"} />
        <Button variant="default" size="lg" label={"<Button size=”lg” />"} />
        <Button variant="default" color="default" label={"<Button color=”default” />"} />
        <Button variant="default" color="primary" label={"<Button color=”primary” />"} />
      </div>
      <div className='con'>
        <Button variant="default" color="secondary" content="secondary" label={"<Button color=”secondary” />"} />
        <Button variant="default" color="danger" content="danger" label={"<Button color=”danger” />"} />
        <Button variant="default" color="defaulthover" label={"&:hover, &:focus"} />
        <Button variant="default" color="primaryhover" hover label={"&:hover, &:focus"} />
      </div>
      <div className='con'>
        <Button variant="default" color="secondaryhover" hover content="secondary" label={"&:hover, &:focus"} />
        <Button variant="default" color="dangerhover" hover content="danger" label={"&:hover, &:focus"} />
      </div>
      <div id="copy-right">created by <span>Lbringer/Aditya</span>-devChallenges.io</div>
    </>)
  }
}

export default App;
