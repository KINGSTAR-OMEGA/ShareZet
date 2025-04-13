// Function to get element's top position
const getOffsetTop = (element: Element): number => {
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
};

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = getOffsetTop(element);
    window.scrollTo({
      top: offsetTop - 80, // Offset for header
      behavior: 'smooth'
    });
  }
};

// Update URL without page reload
export const updateURLHash = (hash: string) => {
  window.history.pushState(null, '', hash);
};

// Get active section based on scroll position
export const getActiveSection = (): string | null => {
  const sections = document.querySelectorAll('section[id]');
  let currentSection: string | null = null;
  
  sections.forEach((section) => {
    const sectionTop = getOffsetTop(section);
    const sectionHeight = section.getBoundingClientRect().height;
    const scrollY = window.scrollY;
    
    if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  return currentSection;
};