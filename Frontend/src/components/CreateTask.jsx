import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from 'react-hot-toast';
import { 
  SquarePlus, 
  Loader2, 
  Folder, 
  Tag, 
  AlignLeft, 
  Activity, 
  Image as ImageIcon,
  X
} from "lucide-react";
import axios from "axios";

const CreateTask = ({ onTaskCreated }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("todo");

  const handleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://flownest-backend-2.onrender.com/tasks/create`,
        { title, description, priority, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        toast.success("Task created successfully!")
        onTaskCreated();
        setOpen(false);
        resetForm();
      }
    } catch (err) {
      toast.error("Failed to create task");
      console.error("Error creating task", err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("todo");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-[#6b5fed] px-3 py-2 rounded-lg text-white flex gap-2 items-center hover:bg-[#5a4edc] transition shadow-sm font-medium">
          <SquarePlus size={20} strokeWidth={1.5} />
          Add Task
        </button>
      </DialogTrigger>
      
      {/* Modal Content - styled like the image */}
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-slate-800 p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center">
          <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            New Task
          </DialogTitle>
          {/* Default Close button is hidden by Shadcn usually, we rely on default or custom one */}
        </div>

        <form onSubmit={handleSumbit} className="px-6 py-6 space-y-6">
          
          {/* Row 1: Title (Mapped to Project) */}
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
              <Folder size={18} />
              <span className="font-medium text-sm">Task Title</span>
            </div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Redesign Homepage"
              className="border-none shadow-none text-slate-800 dark:text-slate-200 font-semibold placeholder:font-normal px-0 focus-visible:ring-0 h-auto py-1 text-base bg-transparent"
            />
          </div>

          {/* Row 2: Priority (Mapped to Tags) */}
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
              <Tag size={18} />
              <span className="font-medium text-sm">Priority</span>
            </div>
            <div className="flex gap-2">
              {['low', 'medium', 'high'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all border ${
                    priority === p 
                      ? 'bg-slate-800 dark:bg-slate-600 text-white border-slate-800 dark:border-slate-600' 
                      : 'bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Status (Mapped to Status Dots) */}
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
              <Activity size={18} />
              <span className="font-medium text-sm">Status</span>
            </div>
            <div className="flex gap-3 items-center">
               {/* Todo (Grey) */}
               <button type="button" onClick={() => setStatus('todo')} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${status === 'todo' ? 'border-slate-400' : 'border-transparent'}`}>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
               </button>
               {/* In Progress (Yellow/Orange) */}
               <button type="button" onClick={() => setStatus('in-progress')} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${status === 'in-progress' ? 'border-yellow-400' : 'border-transparent'}`}>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               </button>
               {/* Completed (Green) */}
               <button type="button" onClick={() => setStatus('completed')} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${status === 'completed' ? 'border-green-500' : 'border-transparent'}`}>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </button>
               <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 capitalize font-medium">
                 {status.replace('-', ' ')}
               </span>
            </div>
          </div>

          {/* Row 4: Description (Mapped to Links/Assign) */}
          <div className="grid grid-cols-[120px_1fr] items-start gap-4">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 mt-2">
              <AlignLeft size={18} />
              <span className="font-medium text-sm">Desc</span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description..."
              rows={2}
              className="w-full resize-none border-none shadow-none text-slate-600 dark:text-slate-400 focus:ring-0 p-0 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none bg-transparent"
            />
          </div>

          {/* Footer Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#6b5fed] hover:bg-[#5a4edc] text-white rounded-xl text-base font-semibold shadow-lg shadow-indigo-200"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Create Task"}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;