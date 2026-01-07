import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, X, File, Trash2, Download } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { data: files = [], refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = async (selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    const file = selectedFiles[0];
    
    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      toast.error('File size exceeds 50MB limit');
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const fileData = e.target?.result as string;
        const base64Data = fileData.split(',')[1];

        await uploadMutation.mutateAsync({
          fileName: file.name,
          fileData: base64Data,
          mimeType: file.type,
          fileSize: file.size,
          category: 'portfolio',
        });

        toast.success('File uploaded successfully!');
        refetch();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Failed to upload file');
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (fileId: number) => {
    try {
      await deleteMutation.mutateAsync({ fileId });
      toast.success('File deleted successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to delete file');
      console.error(error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  return (
    <div className="w-full space-y-6">
      {/* Upload Area */}
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${
          isDragging
            ? 'border-[#00E0C7] bg-[#00E0C7]/5'
            : 'border-white/20 hover:border-white/40 bg-white/5'
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          disabled={isUploading}
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.div
            animate={{ y: isDragging ? -5 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Upload className="w-12 h-12 text-[#00E0C7]" />
          </motion.div>

          <div className="text-center">
            <p className="text-white font-medium mb-2">
              {isUploading ? 'Uploading...' : 'Drag and drop your files here'}
            </p>
            <p className="text-white/60 text-sm">
              or click to browse (max 50MB)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Files List */}
      <AnimatePresence>
        {files && files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3"
          >
            <h3 className="text-white font-medium">Your Files ({files.length})</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <File className="w-5 h-5 text-[#00E0C7] flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-white truncate text-sm font-medium">
                        {file.fileName}
                      </p>
                      <p className="text-white/50 text-xs">
                        {file.fileSize ? (file.fileSize / 1024).toFixed(2) : '0'} KB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <motion.a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="w-4 h-4 text-white/60 hover:text-[#00E0C7]" />
                    </motion.a>

                    <motion.button
                      onClick={() => handleDelete(file.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-white/60 hover:text-red-500" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {files && files.length === 0 && !isUploading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <p className="text-white/60">No files uploaded yet</p>
        </motion.div>
      )}
    </div>
  );
}
