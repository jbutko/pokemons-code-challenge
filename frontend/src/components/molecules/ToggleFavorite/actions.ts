'use server'

import { revalidateTag } from 'next/cache'

export const reloadListData = () => revalidateTag('/')
