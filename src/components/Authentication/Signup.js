import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [show, setShow] = useState(false)
  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  const [confirmPassword, setConfirmPassword]= useState()
  const [pic, setPic] = useState()
  

  const handleClick = () =>{setShow(!show)}
  const postDetails = (pics)=>{}
  const onSubmitHandler = ()=>{console.log("submitted")}  

  return (
    <VStack spacing='5px' color='black'>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter your name'
          onChange={(e)=>setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your email'
          onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>
      
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
           <Input
            type={show? "text":"password"}
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement>
               <Button h="1.75rem" size="sm" onClick={handleClick}>{show? "Hide":"Show"}</Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
           <Input
            type={show? "text":"password"}
            placeholder='ReEnter your password'
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <InputRightElement>
               <Button h="1.75rem" size="sm" onClick={handleClick}>{show? "Hide":"Show"}</Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="img" isRequired>
          <FormLabel>Upload your pic</FormLabel>
          <Input
           type="file"
           p={1.5}
           accept="image/*"
           onChange={(e)=>postDetails(e.target.files[0])}
          />
      </FormControl>

      <Button width="100%" colorScheme="blue" style = {{marginTop:15}} onClick = {onSubmitHandler}> 
        Signup
      </Button>

    </VStack>
  )
}

export default Signup