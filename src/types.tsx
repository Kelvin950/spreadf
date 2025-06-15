// types.ts
export interface Creator {
    id: number;
    name: string;
    description: string;
    image: string;
  }
  
  export interface Topic {
    id: number;
    title: string;
    icon: string;
  }
  
  export interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
  }
  
  export interface CategoryTabProps {
    label: string;
    active?: boolean;
    onClick: () => void;
  }
  
  export interface CreatorCardProps {
    creator: Creator;
  }
  
  export interface TopicCardProps {
    topic: Topic;
  }
  
  export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface HeaderProps {
    onMenuToggle: () => void;
    activeCategory: string;
    categories: string[];
    onCategoryChange: (category: string) => void;
  }

  export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  }

  export interface LoginUser {
    email: string;
    password: string;
  }