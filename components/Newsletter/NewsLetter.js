'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function NewsLetter() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Your Email Address"
                  {...field}
                  className="bg-[#021236] text-white"
                />
              </FormControl>
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-[#021236] focus:ring-[#021236]"
                />
                <label
                  htmlFor="terms"
                  className="font-extrabold text-[#021236] text-sm"
                >
                  I agree to the terms
                </label>
              </div>
              <FormDescription>
                I sgree to{' '}
                <Link href="/" className="font-extrabold text-[#021236]">
                  Ikhuku's Privacy
                </Link>{' '}
                and{' '}
                <Link href="/" className="font-extrabold text-[#021236]">
                  Cookies Policy
                </Link>
                . <br />
                You can unsubscribe from our newsletter at any time. <br />
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#021236]">
          Submit
        </Button>
      </form>
    </Form>
  );
}
