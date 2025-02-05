'use client';
import { useAuth } from '@/components/providers/AuthProvider';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';

const formSchema=z.object({
    email: z.string().min(5).max(40),
    password: z.string().min(8, {message:'Password must be atleast 8 characters'}).max(25),
});

const input=[{
    name:'email',
    label:'Имэйл хаяг',
    type:'email',
},
    {
        name:'password',
        label:'Нууц үг',
        type:'password',
    }] as const;

const Register=()=>{
    const {handleSignIn}=useAuth();
    const form=useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:'',
            password:'',
        },
    });
    const onSubmit=async(values: z.infer<typeof formSchema>)=>{
        await handleSignIn( {
            email:values.email,
            password:values.password,
        });
    };
    return( 
    <div className='w-full'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name='email'
                render={({feild})=>(
                    <FormItem>
                        <FormLabel>
                            Email
                        </FormLabel>
                        
                    </FormItem>
                )}
                >

                </FormField>
            </form>
        </Form>
    </div>)
};
export default Register;