import Chapter, { IChapter } from '../model/chapter';
import { CreateChapterDTO, UpdateChapterDTO } from '../dto/chapterDTO';

class ChapterService {
    async createChapter(data: CreateChapterDTO): Promise<IChapter> {
        const chapter = new Chapter(data);
        return await chapter.save();
    }

    async updateChapter(id: string, data: UpdateChapterDTO): Promise<IChapter | null> {
        return await Chapter.findByIdAndUpdate(id, data, { new: true });
    }

    async getChapterById(id: string): Promise<IChapter | null> {
        return await Chapter.findById(id).populate('exercises');
    }

    async deleteChapter(id: string): Promise<IChapter | null> {
        return await Chapter.findByIdAndDelete(id);
    }
}

export default new ChapterService();