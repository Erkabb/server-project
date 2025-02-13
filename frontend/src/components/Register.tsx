'use client';
import { useAuth } from '@/components/providers/AuthProvider';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import { Input } from './ui/input';

const input=[{
    name:'email',
    label:'Имэйл хаяг',
    type:'email',
},
    {
        name:'password',
        label:'Нууц үг',
        type:'password',
    },
    {
        name: 'repeatPassword',
        label: 'Нууц үг давтах',
        type: 'password',
      },] as const;

const SignUp=()=>{
    const {handleSignUp}=useAuth();
    
    const formSchema=z.object({
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
            email: values.email,
            password: values.password,
            repeatPassword: values.repeatPassword,
        });
    };
    return(
        <div className="w-full mx-10">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-1/3 rounded-xl flex'>
                <div className='w-1/2'>
                    <Image src={'/moisturizer.jpg'} alt='rhode' width={500} height={500} className='w-full rounded-s-xl'/>
                </div>
                <div className='w-1/2 bg-[#e5e5e5] rounded-e-xl flex flex-col justify-center'>
                {input.map((input)=>(
                         <FormField control={form.control}
                         name='email'
                         key={input.name}
                         render={({field})=>(
                            <FormItem>
                            <FormLabel className="text-white">
                              {input.label}
                            </FormLabel>
                            <FormControl className="text-white rounded-md">
                              <Input type={input.type} className="p-2 rounded-sm" placeholder={input.label} {...field} />
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