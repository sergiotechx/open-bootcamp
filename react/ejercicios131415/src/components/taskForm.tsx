import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    Button,
    Select,
    Switch,
    Center
} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { ITask, ITaskStateLevel } from "../interface/todoDefinition";


export const TaskForm = () => {

    const initValues = {
        id: uuidv4(),
        description: "",
        level: ITaskStateLevel.normal,
        done: false,
    } as ITask
    const [initialValue, setinitialValue] = useState(initValues);
    const schema = yup
        .object()
        .shape({
            id: yup.string().required(),
            description: yup.string().required().min(6, "description must be 6 characters min").max(50, "description must be 50 characters max"),
            level: yup.string().required(),
            done: yup.boolean().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues: initialValue,
    });
    const onSubmit = (values: any) => {
        console.log("Values::::::", values);
    };
    const onError = (error: any) => {
        console.log("Error:::::::", error);
    };

    return (
        <>
            <Center>
            <Box  width="50%"  borderRadius='xl' bg='aliceblue'>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <FormControl>
                        <FormLabel htmlFor="id">id</FormLabel>
                        <Input id="name" type="text" isReadOnly={true} {...register("id")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input id="description" type="text" {...register("description")} />
                        {errors && errors.description && (
                            <FormHelperText color="red">
                                {errors.description.message && errors.description.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Task level</FormLabel>
                        <Select placeholder='Select a level' id="level" isRequired={true}>
                            <option value="normal">normal</option>
                            <option value="urgent">urgent</option>
                            <option value="blocking">blocking</option>
                        </Select>
                        {errors && errors.description && (
                            <FormHelperText color="red">
                                {errors.level?.message && errors.level?.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl >
                        <FormLabel htmlFor='done' mb='0'>
                            Task done ?
                        </FormLabel>
                        <Switch id='done' />
                        {errors && errors.description && (
                            <FormHelperText color="red">
                                {errors.done?.message && errors.done?.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                   
                    <Button type="submit" colorScheme="blue"  >
                        Submit
                    </Button>
                    
                </form>

            </Box>
            </Center></>
    )

}