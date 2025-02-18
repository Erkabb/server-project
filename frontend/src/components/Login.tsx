'use client';
import {useAuth} from '@/components/providers/AuthProvider';
import {useForm} from 'react-hook-form';
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form';
import {Input} from './ui/input';

const formSchema = z.object({
    email: z.string().min(5).max(40).nonempty({message: 'Must have a value'}),
    password: z.string().min(8).nonempty({message: 'Must have a value'})
        .trim(),
})

const input = [{
    name: 'email',
    label: 'Email',
    type: 'email',
},
    {
        name: 'password',
        label: 'Password',
        type: 'password',
    },] as const;

const Login = () => {
    const {handleSignIn} = useAuth();
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
    return (
        <div className="w-full px-10 lg:h-[750px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full rounded-xl flex h-full">
                    <div className="bg-[url(/serum.jpg)] w-1/2 rounded-s-xl">
                    </div>
                    <div className='w-1/2 bg-[#e5e5e5] rounded-e-xl flex flex-col justify-center gap-5 px-10'>
                        {input.map((input) => (
                            <FormField control={form.control}
                                       name='email'
                                       key={input.name}
                                       render={({field}) => (
                                           <FormItem>
                                               <FormControl className="bg-white rounded-xl">
                                                   <Input type={input.type} className="lg:h-14 rounded-xl"
                                                          placeholder={input.label} {...field} />
                                               </FormControl>
                                               <FormMessage className="text-xs text-red-500"/>
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
export default Login;