import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()
  

  const handleClick = () =>{setShow(!show)}
  const onSubmitHandler = ()=>{console.log("submitted")}  

  return (
    <VStack spacing='5px' color='black'>
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

      <Button width="100%" colorScheme="blue" style = {{marginTop:15}} onClick = {onSubmitHandler}> 
        Login
      </Button>

      <Button variant="solid" width="100%" colorScheme="red" style = {{marginTop:15}} onClick = {()=>{
        setEmail("abc@gmail.com");
        setPassword("12345");
      }}> 
        Get User Credentials
      </Button>

    </VStack>
  )
}

export default Login