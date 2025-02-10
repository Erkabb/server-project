'use client';
import { useAuth } from '@/components/providers/AuthProvider';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import { Input } from './ui/input';

const formSchema=z.object({
    email: z.string().min(5).max(40),
    password: z.string().min(8)
    .trim(),
})

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

const Login=()=>{
    const {handleSignIn}=useAuth();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: '',
          password: '',
        },
      });
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        handleSignIn({
            email: values.email,
            password: values.password,
        });
      };
    return( 
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-1/3 flex rounded-xl'>
                <div className='w-1/2 '>
                    <Image src={'/blush.jpg'} alt='rhode' width={500} height={500} className='w-full h-1/2 rounded-s-xl'/>
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
)
};
export default Login;