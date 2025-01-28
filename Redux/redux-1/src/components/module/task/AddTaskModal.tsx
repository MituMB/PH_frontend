import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

  DialogFooter,

  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function AddTaskModal() {

  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
  }
  return (
    <>
    
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input {...field}/>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
  </form>
</Form>

       
      </DialogContent>
    </Dialog>
    </>
  )
}
