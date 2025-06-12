import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const testimonialsFile = path.join(dataDir, 'testimonials.json');
const contactFile = path.join(dataDir, 'contact.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize files if they don't exist
if (!fs.existsSync(testimonialsFile)) {
  fs.writeFileSync(testimonialsFile, JSON.stringify([]));
}

if (!fs.existsSync(contactFile)) {
  fs.writeFileSync(contactFile, JSON.stringify([]));
}

export interface Testimonial {
  id: string;
  name: string;
  email: string;
  role: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  createdAt: string;
  updatedAt: string;
}

// Testimonials
export const getTestimonials = (): Testimonial[] => {
  const data = fs.readFileSync(testimonialsFile, 'utf-8');
  return JSON.parse(data);
};

export const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>): Testimonial => {
  const testimonials = getTestimonials();
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  testimonials.push(newTestimonial);
  fs.writeFileSync(testimonialsFile, JSON.stringify(testimonials, null, 2));
  return newTestimonial;
};

export const updateTestimonial = (id: string, status: Testimonial['status']): Testimonial | null => {
  const testimonials = getTestimonials();
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) return null;
  
  testimonials[index] = {
    ...testimonials[index],
    status,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(testimonialsFile, JSON.stringify(testimonials, null, 2));
  return testimonials[index];
};

export const deleteTestimonial = (id: string): boolean => {
  const testimonials = getTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);
  if (filtered.length === testimonials.length) return false;
  fs.writeFileSync(testimonialsFile, JSON.stringify(filtered, null, 2));
  return true;
};

// Contact Messages
export const getContactMessages = (): ContactMessage[] => {
  const data = fs.readFileSync(contactFile, 'utf-8');
  return JSON.parse(data);
};

export const addContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt' | 'updatedAt'>): ContactMessage => {
  const messages = getContactMessages();
  const newMessage: ContactMessage = {
    ...message,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  messages.push(newMessage);
  fs.writeFileSync(contactFile, JSON.stringify(messages, null, 2));
  return newMessage;
};

export const updateContactMessage = (id: string, status: ContactMessage['status']): ContactMessage | null => {
  const messages = getContactMessages();
  const index = messages.findIndex(m => m.id === id);
  if (index === -1) return null;
  
  messages[index] = {
    ...messages[index],
    status,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(contactFile, JSON.stringify(messages, null, 2));
  return messages[index];
};

export const deleteContactMessage = (id: string): boolean => {
  const messages = getContactMessages();
  const filtered = messages.filter(m => m.id !== id);
  if (filtered.length === messages.length) return false;
  fs.writeFileSync(contactFile, JSON.stringify(filtered, null, 2));
  return true;
}; 