import { reactive, useContext } from '@nuxtjs/composition-api';

/**
 * Create reactive style object for background image
 *
 * @param image Image url or ulr's as array
 * @param position Background image position
 * @param repeat Sets how background images are repeated
 * @returns Reactive style object
 */
export function useBackgroundImage(image: string | string[], position?: string, repeat?: string): { style: {
  backgroundImage: string
  backgroundPosition: string,
  backgroundRepeat: string,
} } {
  const { $img } = useContext();
  const isMultipleImages = Array.isArray(image);

  function createImage(img: string) {
    return $img(`/backgrounds/${img}.svg`, {
      modifiers: {
        quality: 50,
      },
    });
  }

  const backgroundImage = isMultipleImages
    ? [...image].map((img) => `url('${createImage(img)}')`) : [`url('${createImage(image as string)}')`];

  const style = reactive<CSSStyleDeclaration>({
    backgroundImage: backgroundImage.join(','),
    backgroundPosition: position || 'center center',
    backgroundRepeat: repeat || 'no-repeat',
  } as CSSStyleDeclaration);

  return { style };
}
