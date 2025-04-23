export interface UserData {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  isActive: boolean;
  lastActive: Date;
  loginCount: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  status: 'active' | 'completed' | 'archived';
}
