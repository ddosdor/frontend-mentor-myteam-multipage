import { reactive, useContext } from '@nuxtjs/composition-api';

/**
 * Create reactive style object for background image
 *
 * @param image Image url
 * @param position Background image position
 * @param repeat Sets how background images are repeated
 * @returns Reactive style object
 */
export function useBackgroundImage(image: string, position?: string, repeat?: string): { style: {
  backgroundImage: string
  backgroundPosition: string,
  backgroundRepeat: string,
} } {
  const { $img } = useContext();
  const backgroundImage = $img(`/backgrounds/${image}.svg`, {
    modifiers: {
      quality: 50,
    },
  });
  const style = reactive<CSSStyleDeclaration>({
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: position || 'center center',
    backgroundRepeat: repeat || 'no-repeat',
  } as CSSStyleDeclaration);

  return { style };
}
