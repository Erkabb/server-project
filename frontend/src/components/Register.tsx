'use client';
import { useAuth } from '@/components/providers/AuthProvider';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from './ui/input';

const input=[
    {
        name:'firstname',
        label:'Firstname',
        type:'firstname'
    },
    {
        name:'lastname',
        label:'Lastname',
        type:'lastname'
    },
    {
    name:'email',
    label:'Email',
    type:'email',
},
    {
        name:'password',
        label:'Password',
        type:'password',
    },
    {
        name: 'repeatPassword',
        label: 'RepeatPassword',
        type: 'RepeatPassword',
      },] as const;

const SignUp=()=>{
    const {handleSignUp}=useAuth();
    
    const formSchema=z.object({
        firstname: z.string().min(3),
        lastname:z.string().min(3),
        email: z.string().min(5).max(40),
        password: z.string().min(8, {message:'Password must be at least 8 characters'}).regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
          message: 'Contain at least one special character.',
        })
        .trim(),
        repeatPassword: z.string().min(8, { message: 'Be at least 8 characters long' }),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: 'Passwords do not match',
      path: ['repeatPassword'],
    });
    const form=useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:'',
            password:'',
            repeatPassword:'',
        },
    });
    const onSubmit=async(values: z.infer<typeof formSchema>)=>{
        handleSignUp({
            firstname:values.firstname,
            lastname:values.lastname,
            email: values.email,
            password: values.password,
            repeatPassword: values.repeatPassword,
        });
    };
    return(
        <div className="w-full px-10 lg:h-[750px]">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full rounded-xl flex h-full'>
                <div className="bg-[url(/serum.jpg)] w-1/2 rounded-s-xl">
                </div>
                <div className='w-1/2 bg-[#e5e5e5] rounded-e-xl flex flex-col justify-center gap-5 px-10'>
                {input.map((input)=>(
                         <FormField control={form.control}
                         name='email'
                         key={input.name}
                         render={({field})=>(
                            <FormItem className="">
                            <FormControl className="bg-white rounded-xl">
                              <Input type={input.type} className="lg:h-14 rounded-xl" placeholder={input.label} {...field} />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                         )}
                         >
                         </FormField>
                ))}
                </div>
            </form>
        </Form>
        </div>
    )
};
export default SignUp;