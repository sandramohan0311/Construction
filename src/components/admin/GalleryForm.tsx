import { X } from "lucide-react";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import InputField from "./InputField";
import UploadBtn from "./UploadBtn";
import SecondBtn from "@/components/admin/SecondBtn";
import { useGalleryAction } from "@/hooks/useGalleryAction";

interface GalleryFormProps {
  onClose: () => void;
}

interface FormDataState {
  title: string;
  image: File | null;
  type: string;
}

interface Errors {
  image?: string;
}

const typeOptions = [
  { id: "decoration", label: "Decoration Design & Implementation" },
  { id: "building", label: "Building Contracting" },
  { id: "traffic", label: "Traffic & Road Signs Installation" },
  { id: "billboards", label: "Advertising Billboards Contracting" },
  { id: "steel", label: "Steel Constructions Contracting" },
  { id: "road", label: "Road Contracting" },
  { id: "electromechanical", label: "Electromechanical Equipment Installation and Maintenance" },
  { id: "electrical", label: "Electrical Fitting Contracting" },
  { id: "swimmingpools", label: "Swimming Pools Installation Works" },
];

const GalleryForm: React.FC<GalleryFormProps> = ({ onClose }) => {
  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");

  const [formData, setFormData] = useState<FormDataState>({
    title: "",
    image: null,
    type: "",
  });

  const { create, created } = useGalleryAction();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.type) {
      setErrors((prev) => ({
        ...prev,
        image: undefined,
        // Set an error for type if needed
      }));
      return;
    }

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "image" && value) {
        formDataObj.append("image", value);
      } else {
        formDataObj.append(key, value as string);
      }
    });

    create(formDataObj);
  };

  useEffect(() => {
    if (created) {
      setFormData({
        title: "",
        image: null,
        type: "",
      });
      setPreview(null);
      setImageName("");
    }
  }, [created]);

  useEffect(() => {
    if (created) {
      onClose();
    }
  }, [created, onClose]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size should be under 5MB.",
        }));
        setFormData((prev) => ({ ...prev, image: null }));
        setPreview(null);
        setImageName("");
        return;
      }

      setErrors((prev) => ({ ...prev, image: undefined }));
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  return (
    <form
      className="fixed top-0 right-0 h-full md:w-[500px] w-full bg-white shadow-lg p-5 transition-transform duration-300 flex flex-col gap-5 overflow-y-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Add Image</h2>
        <div
          className="h-9 w-9 rounded-full bg-[#F2F2F2] flex items-center justify-center cursor-pointer"
          onClick={onClose}
        >
          <X color="#767676" />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-4">
        <InputField
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        {/* Dropdown for Type */}
        <div>
          <label htmlFor="type" className="block mb-1 font-medium">
            Select Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleSelectChange}
            required
            className="w-full border p-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              -- Choose a type --
            </option>
            {typeOptions.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={imageName}
              readOnly
              placeholder="No file chosen"
              className="border p-3 rounded-full border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 px-3 py-2 text-sm text-gray-600 bg-gray-50 cursor-not-allowed"
            />
            <label
              htmlFor="imageUpload"
              className="px-4 py-2 bg-black text-white rounded-full cursor-pointer text-sm"
            >
              Browse
            </label>
            <input
              id="imageUpload"
              type="file"
              name="image"
              accept=".jpg,.jpeg,.png,.webp,.svg,.bmp"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {preview && (
            <div className="mt-2">
                <img
                src={preview}
                alt="Selected preview"
                className="w-full max-h-64 object-contain rounded border"
                />
            </div>
            )}

          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>
      </div>

      <div className="w-full h-auto flex gap-2">
        <SecondBtn BtnText="cancel" onClick={onClose} />
        <UploadBtn BtnText="Add" type="submit" />
      </div>
    </form>
  );
};

export default GalleryForm;
