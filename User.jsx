import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getusers } from "../Redux/action"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
export const User=()=> {
    const [users,setUser]= useState("")
    const user= useSelector((store)=> store.getreducer.user)
    console.log("r",user)
    const dispatch= useDispatch()
    // useEffect(()=> {
    //     dispatch(getusers())
    // },[])

    const handleuser=(e)=> {
        e.preventDefault()
         console.log("users",users)
         dispatch(getusers(users))
        //  dispatch(getusers(user.gists_url))
    }
    console.log("user",user)
    return (
        <>
        <form onSubmit={handleuser}>
        <label style={{padding:"15px",borderRadius:"10px",fontSize:"22px",textAlign:"center"}}>User Name</label>
        <input type="username" placeholder="Enter UserName" onChange={(e)=> setUser(e.target.value)} style={{padding:"15px",borderRadius:"10px",fontSize:"22px",textAlign:"center"}}/>
        <button style={{padding:"15px",borderRadius:"10px",fontSize:"22px",textAlign:"center"}} type="text">Submit</button>
        </form>
            <h3>Get Public Details Of User</h3>
        <div style={{ width:"500px",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",borderRadius:"25px",marginTop:"20px"}}>
         <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        {/* <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        /> */}
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
            user?.avatar_url
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            UserName:  {user?.login}
            </Heading>
            <Text color={'gray.500'}> Name: {user?.name}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
               
              <Text fontSize={'sm'} color={'gray.500'}>
              No. of public repos:   {user?.public_gists}
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
                
              <Text fontSize={'sm'} color={'gray.500'}>
              No. of public gists :   {user?.public_repos}
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
          Created-At: {user?.created_at}
          </Button>
        </Box>
      </Box>
    </Center>
    
    </div>
        </>
    )
}