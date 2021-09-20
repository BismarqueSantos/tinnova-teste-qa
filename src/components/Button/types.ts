interface unusual {
  disabled?: boolean;
  isLoading?: boolean;
}

export interface thisComp extends unusual{
  label: string;
  onClick: ()=>void;
}

export interface thisCompStyle extends unusual{

}