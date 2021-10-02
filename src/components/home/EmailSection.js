import React from 'react';
import {Box, Button, Container, FormHelperText, TextField, Typography} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import Image from 'next/image';

const EmailSection = () => {

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };


    return (
        <Box sx={{
            py: '6rem',
        }}>
            <Container maxWidth={'xxl'}>

                <Box sx={{
                    display: 'grid',
                    gridGap: '1.5rem',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr',
                    },
                    placeItems: 'center',
                }}>

                    {/* Left Side*/}

                    <Box>
                        <Typography sx={{
                            mb: '1rem',
                        }} gutterBottom fontSize={'2rem'} fontWeight={'bold'} variant={'h1'}>
                            Subscribe to email
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Controller
                                name="email"
                                rules={{
                                    required: 'You must have to specify your Email',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid Email",
                                    },
                                }}
                                control={control}
                                render={({field}) => <TextField  {...field} placeholder={'Email'}/>}
                            />

                            <FormHelperText sx={{
                                color: 'red',
                            }}>
                                {errors.email && errors?.email?.message}
                            </FormHelperText>

                            <Button variant={'contained'} sx={{
                                mt: '1rem',
                            }} color={'secondary'} type={'submit'}>
                                Submit
                            </Button>


                        </form>
                    </Box>

                    {/* Right Side*/}
                    <Box>
                        <Image src={'/opensea-badge.png'} width={302} height={107}/>
                    </Box>




                </Box>
            </Container>
        </Box>
    );
};

export default EmailSection;