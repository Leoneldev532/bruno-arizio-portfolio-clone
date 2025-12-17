type WorkItem = {
  image: string;
  title: string;
  subTitle: string;
  onHover: (el: { image?: string,title ?:string , subTitle?:string ,year ?:string }) => void;
  onShowThumbnail: (el: string | null) => void;
  onLeave?: () => void;
    moreInfos?:{
         year:string
       },
 };


export const getworksList = (
  setter: (image: string) => void,
  showProject?: () => void,
  hideProject?: () => void,
  handleSetCurrentInfoProjectSelected?: (data: { title?: string | null | undefined; subTitle?: string | null | undefined; year?: string | null | undefined }) => void
): WorkItem[] => {

  return [
    {
      image: "./brina-blum-nWX4pKwzLoE-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./brina-blum-nWX4pKwzLoE-unsplash.jpg");
        showProject?.();

        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })

        console.log("IS me");
      },
      onShowThumbnail: (el) => {
        setter(el || "./brina-blum-nWX4pKwzLoE-unsplash.jpg");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./don-kaveen-NFbwes_e-jI-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./don-kaveen-NFbwes_e-jI-unsplash.jpg");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./julia-WOsNIxMmyCA-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./kam-idris-_HqHX3LBN18-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./lotus-design-n-print-1vMz2_MclrM-unsplash.jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./minh-pham-OtXADkUh3-I-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy--7QwG_Gu2tg-unsplash (1).jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy--7QwG_Gu2tg-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy-IH7wPsjwomc-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy-umAXneH4GhA-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./brina-blum-nWX4pKwzLoE-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./don-kaveen-NFbwes_e-jI-unsplash.jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./julia-WOsNIxMmyCA-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./kam-idris-_HqHX3LBN18-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./lotus-design-n-print-1vMz2_MclrM-unsplash.jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./minh-pham-OtXADkUh3-I-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({ title: null, subTitle: null, year: null })
        hideProject?.();
      },
    },
    {
      image: "./roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy--7QwG_Gu2tg-unsplash (1).jpg",
      title: "Adobe",
      subTitle: "Creative Solutions",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy--7QwG_Gu2tg-unsplash.jpg",
      title: "Meta",
      subTitle: "Digital Experiences",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image: "./spacejoy-IH7wPsjwomc-unsplash.jpg",
      title: "Samsung",
      subTitle: "Technology Integration",
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onShowThumbnail: (el) => {
        setter(el || "./kid.webp");
        showProject?.();
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },

    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      title: "Architecture Studio",
      subTitle: "Modern Structures",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Lab",
      subTitle: "Visual Research",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      title: "Digital Agency",
      subTitle: "Future Interfaces",
      onShowThumbnail: (el) => setter(el || "./kid.webp"),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      title: "UX Research",
      subTitle: "Human Interfaces",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      title: "Product Design",
      subTitle: "Functional Aesthetics",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Agency",
      subTitle: "Brand Systems",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      title: "Tech Workspace",
      subTitle: "Clean Interfaces",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },

    {
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      title: "Landscape Studio",
      subTitle: "Natural Balance",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      title: "Digital Art",
      subTitle: "Abstract Motion",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },

    {
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Systems",
      subTitle: "Generative Design",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      title: "Corporate Design",
      subTitle: "Visual Identity",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1200&q=80",
      title: "Innovation Studio",
      subTitle: "Concept Development",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
      title: "Software Lab",
      subTitle: "Scalable Systems",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
      title: "Motion Studio",
      subTitle: "Animated Experiences",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
      title: "Brand Lab",
      subTitle: "Identity Systems",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Web Studio",
      subTitle: "Modern Development",
      onShowThumbnail: (el) => setter(el || `kid.webp`),
      moreInfos:{
        year:"2025"
      },
      onHover: (el) => {
        setter(el.image || "./kid.webp");
        showProject?.();
        
        handleSetCurrentInfoProjectSelected?.({ title: el.title, subTitle: el.subTitle, year: el.year })
      },
      onLeave: () => {
        handleSetCurrentInfoProjectSelected?.({
          subTitle:null,
          title:null,
          year:null
        })
        hideProject?.();
      },
    },
  ];
};
