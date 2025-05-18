import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import UploadBtn from "./UploadBtn";
import SecondBtn from "./SecondBtn";
import { useGalleryAction } from "@/hooks/useGalleryAction";
import { BASE_FILE_URL } from "@/utils/constant";
import { getGalleryById } from "@/api/admin/galleryApi";

interface EditGalleryFormProps {
  galleryId: string;
  onClose: () => void;
}

interface GalleryFormData {
  title: string;
  image: File | string | null;
  type: string;
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
  { id: "maintenance", label: "Building Maintenance and Service" },
  { id: "swimmingpools", label: "Swimming Pools Installation Works" },
];

const EditGalleryForm: React.FC<EditGalleryFormProps> = ({ galleryId, onClose }) => {
  const [errors, setErrors] = useState<{ image?: string; title?: string; type?: string }>({});
  const [imageName, setImageName] = useState("");

  const folder = "gallery/";
  const url = BASE_FILE_URL + folder;

  const [formData, setFormData] = useState<GalleryFormData>({
    title: "",
    image: null,
    type: "",
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { update, updating, updated } = useGalleryAction();

  useEffect(() => {
    const fetchGalleryDetails = async () => {
      if (!galleryId) return;
      try {
        const data = await getGalleryById(galleryId);
        setFormData({
          title: data.title || "",
          image: data.image || "",
          type: data.type || "", // Load type from API data
        });
        setPreviewImage(`${url}${data.image}`);
        setImageName(typeof data.image === "string" ? data.image : "");
      } catch (error) {
        console.error("Failed to fetch gallery details", error);
      }
    };

    fetchGalleryDetails();
  }, [galleryId]);

  useEffect(() => {
    if (updated) {
      onClose();
    }
  }, [updated, onClose]);

  useEffect(() => {
    return () => {
      if (previewImage?.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, type: e.target.value }));
    setErrors((prev) => ({ ...prev, type: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size should be under 10MB.",
        }));
        setFormData((prev) => ({ ...prev, image: null }));
        setPreviewImage(null);
        setImageName("");
        return;
      }

      setErrors((prev) => ({ ...prev, image: undefined }));
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!galleryId) {
      console.error("galleryId is undefined!");
      return;
    }

    if (!formData.title.trim()) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
      return;
    }

    if (!formData.type) {
      setErrors((prev) => ({ ...prev, type: "Please select a type" }));
      return;
    }

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "image" && value && typeof value !== "string") {
        formDataObj.append("image", value);
      } else {
        formDataObj.append(key, value || "");
      }
    });

    update({ id: galleryId, formDataObj });
  };

  return (
    <form
      className="fixed top-0 right-0 h-full md:w-[500px] w-full bg-white shadow-lg p-5 transition-transform duration-300 flex flex-col gap-5 overflow-y-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Update Gallery</h2>
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-[#F2F2F2] flex items-center justify-center"
          onClick={onClose}
          aria-label="Close edit form"
        >
          <X color="#767676" />
        </button>
      </div>

      <div className="w-full h-full flex flex-col gap-2">
        <InputField
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && (
          <p className="text-red-500 text-sm -mt-2 mb-2">{errors.title}</p>
        )}

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
            className={`w-full border p-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.type ? "border-red-500" : ""
            }`}
            required
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
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={imageName}
              readOnly
              placeholder="No file chosen"
              className="border p-3 rounded-full border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 px-3 py-2 text-sm text-gray-600 bg-gray-50 cursor-not-allowed"
            />
            <label
              htmlFor="editImageUpload"
              className="px-4 py-2 bg-black text-white rounded-full cursor-pointer text-sm"
              aria-label="Upload Image"
            >
              Browse
            </label>
            <input
              id="editImageUpload"
              type="file"
              name="image"
              accept=".jpg,.jpeg,.png,.webp,.svg,.bmp"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
        </div>

        {previewImage && (
          <img
            src={previewImage}
            alt="Selected Preview"
            className="w-40 h-32 object-cover mt-2 rounded"
          />
        )}
      </div>

      <div className="w-full h-auto flex gap-2">
        <SecondBtn BtnText="Cancel" onClick={onClose} />
        <UploadBtn BtnText={updating ? "Updating..." : "Update"} type="submit" />
      </div>
    </form>
  );
};

export default EditGalleryForm;
